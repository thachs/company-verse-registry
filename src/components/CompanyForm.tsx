import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface CompanyFormProps {
  onSubmit: (company: any) => void;
  initialData?: any;
}

export const CompanyForm = ({ onSubmit, initialData }: CompanyFormProps) => {
  const [formData, setFormData] = useState(initialData || {
    name: "",
    industry: "",
    employees: "",
    website: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.industry) {
      toast.error("Please fill in all required fields");
      return;
    }
    onSubmit(formData);
  };

  return (
    <Card className="p-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name *
          </label>
          <Input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="input-focus"
            placeholder="Enter company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Industry *
          </label>
          <Input
            value={formData.industry}
            onChange={(e) =>
              setFormData({ ...formData, industry: e.target.value })
            }
            className="input-focus"
            placeholder="e.g. Technology, Healthcare"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Employees
          </label>
          <Input
            type="number"
            value={formData.employees}
            onChange={(e) =>
              setFormData({ ...formData, employees: e.target.value })
            }
            className="input-focus"
            placeholder="Enter number of employees"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Website
          </label>
          <Input
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            className="input-focus"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <Textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="input-focus"
            placeholder="Brief description of the company"
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full">
          {initialData ? "Update Company" : "Add Company"}
        </Button>
      </form>
    </Card>
  );
};