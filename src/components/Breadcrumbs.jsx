export default function Breadcrumbs({ project }) {
  return (
    <div className="text-sm text-gray-500 mb-4">
      Home / Projects / {project?.title || "—"}
    </div>
  );
}
