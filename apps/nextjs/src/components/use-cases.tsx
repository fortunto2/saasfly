import * as Icons from "@saasfly/ui/icons";
import { Card } from "@saasfly/ui/card";

export function UseCases({ dict }: { dict: Record<string, string> | undefined }) {
  return (
    <div className="flex flex-col items-center w-full py-12">
      <h2 className="text-3xl font-bold mb-12">{dict?.title}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <UseCase 
          icon={<Icons.User className="h-6 w-6 text-purple-500" />}
          title={dict?.creators_title ?? ""}
          description={dict?.creators_desc ?? ""}
        />
        
        <UseCase 
          icon={<Icons.Billing className="h-6 w-6 text-purple-500" />}
          title={dict?.business_title ?? ""}
          description={dict?.business_desc ?? ""}
        />
        
        <UseCase 
          icon={<Icons.Heart className="h-6 w-6 text-purple-500" />}
          title={dict?.musicians_title ?? ""}
          description={dict?.musicians_desc ?? ""}
        />
        
        <UseCase 
          icon={<Icons.Organization className="h-6 w-6 text-purple-500" />}
          title={dict?.agencies_title ?? ""}
          description={dict?.agencies_desc ?? ""}
        />
      </div>
    </div>
  );
}

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function UseCase({ icon, title, description }: UseCaseProps) {
  return (
    <Card className="p-6 rounded-3xl border dark:border-neutral-800 dark:bg-neutral-900/40 transition-all hover:shadow-lg hover:transform hover:scale-105 flex flex-col items-center text-center">
      <div className="mb-4 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-500 dark:text-neutral-400">{description}</p>
    </Card>
  );
} 