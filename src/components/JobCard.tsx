import Image from "next/image";
import React from "react";

interface JobCardProps {
  title: string;
  company: string;
  src: string;
  roles: Array<string>;
  // location: string
  date: string;
  // description: string
}
const JobCard = ({ title, company, date, src,roles }: JobCardProps) => {
  return (
    <div className="classic-card w-full rounded-lg h-48 px-12 flex flex-col justify-center">
            <p className="font-semibold text-sm">{title}</p>
            <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">{`${company}, ${date}`}</p>
        <div className="flex flex-col gap-1 mt-3">
            {roles.map((role) => (
                <p className=" text-sm bullet-pt">{role}</p>
            ))}
        </div>
      {/* <div>
        <Image src={src} alt={`${title}-logo`} width={20} height={20} />
      </div> */}
    </div>
  );
};

export default JobCard;
