"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function QuickActions() {
  const router = useRouter();

  const handleDownloadData = () => {
    // Mock download functionality
    const mockData = {
      reports: [
        { id: 1, type: "Accident", location: "Main St", timestamp: new Date().toISOString() },
        { id: 2, type: "Roadwork", location: "Oak Ave", timestamp: new Date().toISOString() },
        { id: 3, type: "Hazard", location: "Pine Rd", timestamp: new Date().toISOString() },
      ],
      exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(mockData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `reports-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="default" className="w-full" onClick={() => router.push('/submit-report')}>
          Submit New Report
        </Button>
        <Button variant="outline" className="w-full" onClick={() => router.push('/api')}>
          View API
        </Button>
        <Button variant="outline" className="w-full" onClick={handleDownloadData}>
          Download Data
        </Button>
      </CardContent>
    </Card>
  );
}
