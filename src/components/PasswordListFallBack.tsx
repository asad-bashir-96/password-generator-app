import { Password } from "@/lib/controllers";

type PasswordListFallBackProps = {
  data: Password[];
};
export function PasswordListFallBack({ data }: PasswordListFallBackProps) {
  return (
    <div className="w-4/5 px-8 py-10 bg-white dark:bg-secondary border border-primary dark:border-accent  max-w-4xl shadow rounded-lg">
      {data.map((product) => (
        <div
          className="w-full border-t bg-primary/5 dark:bg-accent/5  mx-auto   flex items-center justify-between  dark:border-accent h-20"
          key={product.id}
        >
          <div className="flex flex-col gap-2">
            <div className="w-24 h-6 dark:bg-slate-700 bg-primary/70  animate-pulse"></div>
            <div className="w-44 h-6 dark:bg-slate-700 bg-primary/70  animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
