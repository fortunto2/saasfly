import * as Icons from "@saasfly/ui/icons";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureHighlights() {
  const features: Feature[] = [
    {
      icon: (
        <Icons.User className="h-8 w-8 text-purple-500" data-oid="yp85afb" />
      ),

      title: "Custom Characters with AI Memory",
      description:
        "Create your own AI actors with LoRA technology that remembers their characteristics.",
    },
    {
      icon: (
        <Icons.Laptop className="h-8 w-8 text-blue-500" data-oid="-iofv7h" />
      ),

      title: "Cinematic Camera Controls",
      description:
        "Get professional camera movements without any equipment - pans, zooms, bullet-time effects.",
    },
    {
      icon: (
        <Icons.Blocks className="h-8 w-8 text-green-500" data-oid="xk4fp:d" />
      ),

      title: "Multi-Agent AI Workflow",
      description:
        "Specialized AI agents handle different tasks: script, visuals, characters, editing.",
    },
    {
      icon: (
        <Icons.Rocket className="h-8 w-8 text-red-500" data-oid="itt1.fg" />
      ),

      title: "Fast & Cost Efficient",
      description:
        "Transform ideas into videos in minutes at a fraction of traditional production costs.",
    },
    {
      icon: (
        <Icons.Billing className="h-8 w-8 text-yellow-500" data-oid="nxbaf9d" />
      ),

      title: "Cost Saving",
      description:
        "Get cinematic quality without the cinematic budget - perfect for indies and startups.",
    },
    {
      icon: (
        <Icons.Heart className="h-8 w-8 text-pink-500" data-oid="2u:yw6c" />
      ),

      title: "Easy Editing & Integration",
      description:
        "Simple storyboard interface, drag-and-drop editing, export to all social platforms.",
    },
  ];

  return (
    <div className="py-12" data-oid="y1z5kf:">
      <h2 className="text-3xl font-bold text-center mb-12" data-oid="ky8fepy">
        What Makes SuperDuperAI Super
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-oid="fn_0uca"
      >
        {features.map((feature, index) => (
          <div key={index} className="relative" data-oid="t8-9ouy">
            <FeatureCard feature={feature} data-oid="fh-b39k" />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div
      className="p-6 rounded-3xl border dark:border-neutral-800 dark:bg-neutral-900/40 h-full hover:shadow-xl transition-all hover:transform hover:scale-105"
      data-oid="fzazj0o"
    >
      <div className="mb-5" data-oid="dhyfvfi">
        <div
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center"
          data-oid="tcx2i5i"
        >
          {feature.icon}
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3" data-oid="-mrc85_">
        {feature.title}
      </h3>
      <p className="text-neutral-500 dark:text-neutral-400" data-oid="2ymy2k4">
        {feature.description}
      </p>
    </div>
  );
}
