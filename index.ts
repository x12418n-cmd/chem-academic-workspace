export type Difficulty = 'Cơ bản' | 'Vận dụng' | 'Chuyên sâu Đại học';
export type Question = {
  id: string; difficulty: Difficulty; prompt: string; options?: string[]; answer: string;
  explanation: string[]; kind?: 'choice' | 'numeric'; unit?: string;
};
export type Lesson = {
  id: string; level: string; category: string; title: string; subtitle: string; duration: string;
  objectives: string[]; definition: string; formula: string; theory: string[];
  example: { title: string; steps: string[]; result: string };
  caveats: string[]; questions: Question[];
};
export type AtomCount = { element: string; count: number; atomicMass: number; totalMass: number; percentage: number };
export type Flashcard = { id: string; front: string; back: string; mastery: 'new' | 'review' | 'known'; createdAt: number };
