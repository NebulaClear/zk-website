export default function ZkIcon({ type, className }: { type: string; className?: string }) {
    return <i className={`iconfont ${type} ${className || ''}`} />;
  }
  