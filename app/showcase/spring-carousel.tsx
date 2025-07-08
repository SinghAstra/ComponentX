import { Card, CardContent } from "@/components/ui/card";

export const carouselItems = [
  {
    id: 1,
    content: (
      <Card className="w-full h-full border-0 shadow-none">
        <CardContent className="flex items-center justify-center h-full p-6">
          <span className="text-6xl font-bold text-primary">1</span>
        </CardContent>
      </Card>
    ),
  },
  {
    id: 2,
    content: (
      <Card className="w-full h-full border-0 shadow-none">
        <CardContent className="flex items-center justify-center h-full p-6">
          <span className="text-6xl font-bold text-primary">2</span>
        </CardContent>
      </Card>
    ),
  },
  {
    id: 3,
    content: (
      <Card className="w-full h-full border-0 shadow-none">
        <CardContent className="flex items-center justify-center h-full p-6">
          <span className="text-6xl font-bold text-primary">3</span>
        </CardContent>
      </Card>
    ),
  },
  {
    id: 4,
    content: (
      <Card className="w-full h-full border-0 shadow-none">
        <CardContent className="flex items-center justify-center h-full p-6">
          <span className="text-6xl font-bold text-primary">4</span>
        </CardContent>
      </Card>
    ),
  },
  {
    id: 5,
    content: (
      <Card className="w-full h-full border-0 shadow-none">
        <CardContent className="flex items-center justify-center h-full p-6">
          <span className="text-6xl font-bold text-primary">5</span>
        </CardContent>
      </Card>
    ),
  },
];
