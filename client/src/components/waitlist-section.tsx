import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Rocket, ExternalLink, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import { supabase } from "@/lib/supabase";
import { z } from "zod";
import './waitlist-section.css';

// Define the schema directly since we don't need the shared schema anymore
const insertWaitlistEmailSchema = z.object({
  email: z.string().email(),
  heritageLanguage: z.string().optional(),
});

type InsertWaitlistEmail = z.infer<typeof insertWaitlistEmailSchema>;

const heritageLanguages = [
  { value: "spanish", label: "Spanish" },
  { value: "chinese", label: "Chinese (Mandarin/Cantonese)" },
  { value: "arabic", label: "Arabic" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "italian", label: "Italian" },
  { value: "portuguese", label: "Portuguese" },
  { value: "russian", label: "Russian" },
  { value: "japanese", label: "Japanese" },
  { value: "korean", label: "Korean" },
  { value: "hindi", label: "Hindi" },
  { value: "other", label: "Other" },
];

export default function WaitlistSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertWaitlistEmail>({
    resolver: zodResolver(insertWaitlistEmailSchema),
    defaultValues: {
      email: "",
      heritageLanguage: "",
    },
  });

  const { data: waitlistCount } = useQuery({
    queryKey: ["waitlist-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('waitlist_emails')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      return { count: count || 0 };
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlistEmail) => {
      console.log('Submitting to Supabase:', data);
      
      try {
        const { data: result, error } = await supabase
          .from('waitlist_emails')
          .insert({
            email: data.email,
            heritage_language: data.heritageLanguage || null,
          })
          .select()
          .single();
        
        console.log('Supabase response:', { result, error });
        
        if (error) {
          console.error('Supabase error:', error);
          if (error.code === '23505') { // Unique constraint violation
            throw new Error('This email is already on the waitlist!');
          }
          throw new Error(`Supabase error: ${error.message} (Code: ${error.code})`);
        }
        
        console.log('Success:', result);
        return result;
      } catch (err) {
        console.error('Mutation error:', err);
        throw err;
      }
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you as soon as BeyondWords is ready for early access.",
      });
      queryClient.invalidateQueries({ queryKey: ["waitlist-count"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Oops! Something went wrong",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistEmail) => {
    waitlistMutation.mutate(data);
  };

  return (
    <section
      id="waitlist"
      className="py-32 text-white"
      style={{ background: 'linear-gradient(135deg, hsl(316, 22%, 41%) 0%, hsl(217, 33%, 34%) 100%)' , boxShadow: '0 0 10px 0 rgba(10,10,10,10)'}}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Speak Beyond Words
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Be among the first to experience conversational AI designed for heritage speakers
          </p>
          
          {waitlistCount && (
            <motion.p 
              className="text-white/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Join {waitlistCount.count} others already on the waitlist
            </motion.p>
          )}
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-2">You're on the list!</h3>
                <p className="text-white/80 font-body">
                  Thanks for joining our waitlist. We'll be in touch soon with exclusive early access.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 md:px-8 py-6 rounded-xl bg-white/20 border border-white/30 text-white font-body text-lg md:text-2xl placeholder-white/80 placeholder:text-xs md:placeholder:text-2xl focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all"
                            style={{ fontSize: undefined }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="heritageLanguage"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Enter your heritage language"
                            className="w-full px-4 md:px-8 py-6 rounded-xl bg-white/20 border border-white/30 text-white font-body text-lg md:text-2xl placeholder-white/80 placeholder:text-xs md:placeholder:text-2xl focus:outline-none focus:border-white/50 focus:bg-white/30 transition-all"
                            style={{ fontSize: undefined }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={waitlistMutation.isPending}
                      className="w-full bg-white text-rose-primary px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/90 transition-all shadow-lg"
                    >
                      {waitlistMutation.isPending ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        <Rocket className="mr-2 h-5 w-5" />
                      )}
                      {waitlistMutation.isPending ? "Joining..." : "Join the Waitlist"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            )}
            
            <motion.div 
              className="mt-8 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 font-body mb-4">
                Want to share more about your heritage language journey?
              </p>
              <motion.a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=RncIw6pRT0-Po3Vc1N8ikyownBfAaZ5Gk1xJwTt1Ik1UNVNGUllUMFJWNlBQRFVCQlJHSFZZUzZNWi4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-white/80 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Take Our Community Survey
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
