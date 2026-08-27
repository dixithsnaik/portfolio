const Still = ({ project, ratio = '16 / 10' }) => {
  return (
    <div
      className="relative overflow-hidden bg-[#161412] text-[#f3efe8]"
      style={{ aspectRatio: ratio }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(0.9) contrast(1.03)' }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9">
          <p className="text-[11px] tracking-[0.18em] uppercase text-[#a39b92] mb-3">
            {project.category}
          </p>
          <p className="font-display text-2xl sm:text-3xl leading-tight">
            {project.title}
          </p>
          <p className="mt-4 text-sm text-[#a39b92]">
            {project.technologies.slice(0, 4).join(' · ')}
          </p>
        </div>
      )}
    </div>
  );
};

export default Still;
