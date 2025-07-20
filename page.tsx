"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ClientsPage() {
  return (
    <div className="p-6">
      <Card className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700">
        <CardHeader>
          <CardTitle className="text-neutral-900 dark:text-white">Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 dark:text-neutral-400">Client management coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
