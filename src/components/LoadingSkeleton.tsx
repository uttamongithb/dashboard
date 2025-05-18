import { Skeleton } from './ui/skeleton';

interface LoadingSkeletonProps {
  rows?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ rows = 5 }) => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-1/3" />
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2"><Skeleton className="h-4 w-12" /></th>
              <th className="p-2"><Skeleton className="h-4 w-24" /></th>
              <th className="p-2"><Skeleton className="h-4 w-32" /></th>
              <th className="p-2"><Skeleton className="h-4 w-20" /></th>
              <th className="p-2"><Skeleton className="h-4 w-20" /></th>
              <th className="p-2"><Skeleton className="h-4 w-16" /></th>
              <th className="p-2"><Skeleton className="h-4 w-12" /></th>
              
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, i) => (
              <tr key={i} className="border-t">
                {Array(7).fill(null).map((_, j) => (
                  <td key={j} className="p-2"><Skeleton className="h-6 w-full" /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingSkeleton;