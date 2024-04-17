interface OverviewItemProps {
  label: string;
  value: string | undefined | null;
}

const OverviewItem = ({ label, value }: OverviewItemProps) => (
  <div className='flex flex-col rounded-xl bg-neutral-100 py-3 px-4 dark:bg-neutral-800 sm:col-span-1 space-y-1 border border-neutral-200 dark:border-neutral-800'>
    <span className='text-sm dark:text-neutral-400'>{label}</span>
    <span>{value || 'N/A'}</span>
  </div>
);

export default OverviewItem;
