import { useState } from "react";
import { CompanyCard } from "@/components/CompanyCard";
import { CompanyForm } from "@/components/CompanyForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [companies, setCompanies] = useState([
    {
      name: "TechCorp Solutions",
      industry: "Technology",
      employees: 250,
      website: "https://techcorp.example",
      description: "Leading provider of innovative software solutions for enterprises.",
    },
    {
      name: "GreenEnergy Inc",
      industry: "Renewable Energy",
      employees: 150,
      website: "https://greenenergy.example",
      description: "Sustainable energy solutions for a better tomorrow.",
    },
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddCompany = (company: any) => {
    setCompanies([...companies, company]);
    setShowForm(false);
    toast.success("Company added successfully!");
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Company Registry</h1>
            <p className="mt-1 text-gray-500">Manage and track company information</p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Company
          </Button>
        </div>

        {showForm && (
          <div className="mb-8">
            <CompanyForm onSubmit={handleAddCompany} />
          </div>
        )}

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search companies by name or industry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 input-focus"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <CompanyCard
              key={index}
              company={company}
              onClick={() => toast.info(`Viewing ${company.name}`)}
            />
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No companies found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;