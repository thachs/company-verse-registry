import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Globe } from "lucide-react";

interface CompanyCardProps {
  company: {
    name: string;
    industry: string;
    employees: number;
    website: string;
    description: string;
  };
  onClick: () => void;
}

export const CompanyCard = ({ company, onClick }: CompanyCardProps) => {
  return (
    <Card
      className="p-6 cursor-pointer card-hover animate-slide-up"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
            {company.industry}
          </Badge>
          <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{company.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{company.employees} employees</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe className="w-4 h-4" />
          <a
            href={company.website}
            className="text-primary hover:underline"
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>
      </div>
    </Card>
  );
};