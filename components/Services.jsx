import Link from "next/link";
import { Wifi, UserCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Wifi size={72} strokeWidth={0.8} />,
    title: "Personal Training",
    description:
      "This is ideally for people looking to train with me 3 times a week. It is online or offline.",
    link: "/services", // Modify link as needed
  },
  {
    icon: <UserCheck size={72} strokeWidth={0.8} />,
    title: "Online Coaching",
    description:
      "The other option is online coaching in which we do one virtual session per week. Rest of the days I send you a workout plan on an app that you have to do by yourself as per your convenient time.",
    link: "/services", // Modify link as needed
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-20 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="flex justify-center flex-wrap gap-8">
          {servicesData.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative mx-auto transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg">
                  <CardHeader className="text-primary absolute -top-[60px]">
                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
