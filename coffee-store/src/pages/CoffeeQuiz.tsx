import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { Card,CardContent, CardHeader, CardTitle } from '../components/CardComponent';
import DarkEspresso from '../assets/Quiz/darkespresso.avif'
import ColdBrew from '../assets/Quiz/bareer.avif';
import Vanilla from '../assets/Quiz/vanillalatte.avif';
import Roast from '../assets/Quiz/roastlatte.avif';

// so there will be a quiz, where the user will answer a few questions based on their answers they will be given a custom coffee mug
/*
So, how it work will be there will be a question with id, question and options,
options: 4 options, for each option there are points 
there are 4 properties like bold,smooth,sweet, speciality and for each option u click there are numbers assigned to each of the four types
after entering all the questions answers, all your marked options with their points will be summed like
{bold:6,smooth:4,sweet:7,specificality:5}, now based on this sweet is the highest , there will be an array of objects of these properties,
So we will go to sweet item in CoffeeProfiles array, and display the Card with image description for Sweet profile,
That is how recommendation system works

*/


interface Question {
    id:number,
    question:string,
    options:{ text:string,  points: {[key:string] : number}} []
}

interface CoffeeProfile {
    type:string,
    name:string,
    description:string,
    recommendation:string,
    image:string
}

const CoffeeQuiz = () =>{
    const navigate = useNavigate();
    const [currentQuestion, setQuestion] = useState(0);
    const [answers, setAnswers] = useState<{ [key: string]: number}>({});
    const [showResult, setshowResult] = useState(false);

    const questions: Question [] =[
        {
            id:1,
            question:'what is your ideal morning routine',
            options:[
                {text:"Quick and emerging", points:{bold:3, smooth:1, sweet:1,speciality:1}},
                {text:"Slow and mindful", points:{ smooth:3,speciality:2, bold:1, sweet:1}},
                {text:"Social and fun", points:{sweet:3,speciality:2, smooth:1, bold:1}},
                {text:"Productive and focussed", points:{bold:2, speciality:3, smooth:1, sweet:1}},
           ]
        },
    {
      id: 2,
      question: "How do you prefer your flavors?",
      options: [
        { text: "Bold and intense", points: { bold: 3, specialty: 1, smooth: 0, sweet: 0 } },
        { text: "Smooth and balanced", points: { smooth: 3, bold: 1, specialty: 1, sweet: 1 } },
        { text: "Sweet and creamy", points: { sweet: 3, smooth: 2, bold: 0, specialty: 1 } },
        { text: "Complex and unique", points: { specialty: 3, bold: 1, smooth: 1, sweet: 1 } }
      ]
    },
    {
      id: 3,
      question: "What's your stress level like?",
      options: [
        { text: "Always on the go", points: { bold: 3, specialty: 1, smooth: 1, sweet: 1 } },
        { text: "Balanced and calm", points: { smooth: 3, specialty: 2, bold: 1, sweet: 1 } },
        { text: "Need comfort", points: { sweet: 3, smooth: 2, bold: 1, specialty: 1 } },
        { text: "Seeking adventure", points: { specialty: 3, bold: 2, smooth: 1, sweet: 1 } }
      ]
    },
    {
      id: 4,
      question: "What time do you usually drink coffee?",
      options: [
        { text: "Early morning (5-7 AM)", points: { bold: 3, smooth: 1, sweet: 1, specialty: 1 } },
        { text: "Mid-morning (8-10 AM)", points: { smooth: 2, bold: 2, specialty: 2, sweet: 1 } },
        { text: "Afternoon (12-3 PM)", points: { sweet: 2, smooth: 2, specialty: 2, bold: 1 } },
        { text: "Anytime!", points: { specialty: 3, sweet: 2, smooth: 2, bold: 2 } }
      ]
    },
    {
      id: 5,
      question: "How adventurous are you with food?",
      options: [
        { text: "I stick to classics", points: { smooth: 3, bold: 2, sweet: 1, specialty: 0 } },
        { text: "I like some variety", points: { smooth: 2, bold: 2, sweet: 2, specialty: 1 } },
        { text: "I enjoy trying new flavors", points: { specialty: 2, sweet: 2, bold: 1, smooth: 1 } },
        { text: "I'm always experimenting", points: { specialty: 3, bold: 1, sweet: 1, smooth: 1 } }
      ]
    }
  ];

   const coffeeProfiles: { [key: string]: CoffeeProfile } = {
    bold: {
      type: "bold",
      name: "The Bold Explorer",
      description: "You're decisive, energetic, and appreciate strong, robust flavors that wake up your senses.",
      recommendation: "Dark Roast Espresso or Americano",
      image: DarkEspresso
    },
    smooth: {
      type: "smooth",
      name: "The Smooth Operator",
      description: "You value balance and harmony. You prefer drinks that are well-rounded and easy to enjoy.",
      recommendation: "Medium Roast Latte or Flat White",
      image: Roast
    },
    sweet: {
      type: "sweet",
      name: "The Comfort Seeker",
      description: "You find joy in life's sweet moments and appreciate drinks that feel like a warm hug.",
      recommendation: "Caramel Macchiato or Vanilla Latte",
      image: Vanilla
    },
    specialty: {
      type: "specialty",
      name: "The Artisan Connoisseur",
      description: "You appreciate craftsmanship and unique experiences. You're always curious about new flavors and techniques.",
      recommendation: "Single Origin Pour-over or Cold Brew",
      image: ColdBrew
    }
  };

    const handleAnswer = (option: { text:string,  points: {[key:string] : number}} ) => {
        const newAnswers = { ...answers };
        Object.keys(option.points).forEach(key => {
        newAnswers[key] = (newAnswers[key] || 0) + option.points[key];
        });
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
        setQuestion(prev => prev + 1);
        } else {
        setshowResult(true);
        }
    };


  // now write a function find the person with maximum result, 
  const getResult = ():CoffeeProfile => {
    // now get an array of all accumulated propertirs, 
    const Values = Object.values(answers);
    // now find the maximum among those properties
    const maxValue = Math.max(...Values);
    const Result = Object.keys(answers).find(key=> answers[key] === maxValue ) || 'smooth'
    return coffeeProfiles[Result]
  }

  const restartQuiz = () => {
    setQuestion(0);
    setAnswers({});
    setshowResult(false);
  }

 if (showResult) {
    const result = getResult();
    return (
      <div className="min-h-screen bg-coffee-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <button
              onClick={() => navigate('/')}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </button>
            <h1 className="text-4xl font-bold text-coffee-900 font-serif mb-2">Quiz Results</h1>
            <p className="text-coffee-600">Discover your coffee personality</p>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h2 className="text-3xl font-bold text-coffee-900 font-serif mb-2">
                  {result.name}
                </h2>
                <p className="text-coffee-600 text-lg leading-relaxed mb-6">
                  {result.description}
                </p>
              </div>

              <div className="bg-gold/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-coffee-800 mb-2">
                  Perfect Coffee Match
                </h3>
                <p className="text-coffee-700 text-lg font-medium">
                  {result.recommendation}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={restartQuiz}
                  className="border-coffee-300 text-coffee-700 hover:bg-coffee-100"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Take Quiz Again
                </button>
              </div>
            </CardContent>
        </Card>
    </div>
    )
    }

  return (
        <div className="min-h-screen bg-coffee-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <button
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold text-coffee-900 font-serif mb-2">Coffee Personality Quiz</h1>
          <p className="text-coffee-600">Find your perfect coffee match in 5 questions</p>
        </div>
        </div>
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-coffee-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-coffee-200 rounded-full h-2">
              <div
                className="bg-gold h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Card className="shadow-xl animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-coffee-800 text-center">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 h-auto text-left justify-start hover:bg-coffee-100 hover:border-coffee-400"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 text-coffee-500" />
                    <span className="text-coffee-700">{option.text}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
};

export default CoffeeQuiz