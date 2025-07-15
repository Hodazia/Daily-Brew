import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle} from "./CardComponent";
import { Coffee, Mail, Check } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./ui/Input";

const Newsletter = () => {

    const [email, setemail] = useState('');
    const [isSubmitted, setisSubmitted] = useState<Boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
          // Simulate submission
          setisSubmitted(true);
          setemail('');
          // Reset after 3 seconds
          setTimeout(() => {
            setisSubmitted(false);
          }, 3000);
        }
      };
    return (
        <>
        <section className="py-20 bg-orange-100 bg-fixed bg-no-repeat bg-cover">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <Card className="border-amber-100 bg-white/95 
                backdrop-blur-md shadow-2xl 
                ">
                 <CardContent className="p-8 md:p-12 text-center">
                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center 
                 justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-amber-800" />
                </div>

                {/*Header */}
                <div className="text-3xl 
                md:text-4xl font-bold text-amber-950 mb-4 font-serif">
                    Stay Caffeinated
                </div>

                <p className="text-lg text-amber-800 mb-8 mx-auto max-w-2xl">
                Join our newsletter to get the latest updates on new menu items, special offers, and coffee tips from our expert baristas.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          required
                          className="h-12 text-center sm:text-left 
                          border-amber-800 focus:border-amber-900"
                        />
                        </div>
                        <Button 
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto h-12 
                          bg-amber-800 hover:bg-amber-900 text-white px-8"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Subscribe
                        </Button>
                      </div>
                </form>
                      ) : (
                        <div
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 
                    rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-950 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-amber-800">
                      Your email has been noted. We'll be in touch soon with exciting updates!
                    </p>
                  </div>

                )}

                {/*Features */}
                <div 
                className="mt-8 grid md:grid-cols-3 gap-6 text-sm"
              >
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex 
                  items-center justify-center mx-auto mb-2">
                    <Coffee className="w-4 h-4 text-amber-800" />
                  </div>
                  <p className="text-amber-800">Weekly coffee tips</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full 
                  flex items-center justify-center mx-auto mb-2">
                    <Mail className="w-4 h-4 text-amber-800" />
                  </div>
                  <p className="text-amber-800">Exclusive offers</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-full 
                  flex items-center justify-center mx-auto mb-2">
                    <Check className="w-4 h-4 text-amber-800" />
                  </div>
                  <p className="text-amber-800">New menu updates</p>
                </div>
              </div>
                 </CardContent>
                </Card>
            </div>
        </div>
        </section>
        </>
    )
}

export default Newsletter