import { Skeleton } from "@/src/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex items-center justify-center gap-6">
            {Array(3)
                .fill(0)
                .map((item, key) => (
                    <Skeleton key={key} className="size-64 border rounded-xl" />
                ))}
        </div>
    );
}
