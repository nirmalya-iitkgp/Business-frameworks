export interface FrameworkSection {
  id: string;
  name: string;
  details: string[];
  tips?: string;
}

export interface Framework {
  id: string;
  name: string;
  description: string;
  category: string;
  layout: 'grid' | 'funnel' | 'circles' | 'linear' | 'columns' | 'flower' | 'staircase' | 'radial' | 'pyramid' | 'map' | 'bmc' | 'graph' | 'x-matrix' | 'cycle' | 'fishbone' | 'tree' | 'bow-tie' | 'force-field' | 'stage-gate' | 'diamond' | 'double-diamond' | 'hype-cycle' | 's-curve' | 'bell-curve' | 'satir' | 'kanban' | 'value-chain' | 'spiral' | 'gauge' | 't-chart' | 'comparison' | 'hoq' | 'ladder' | 'iceberg' | 'congruence' | 'cultural-web' | 'matrix';
  sections: FrameworkSection[];
  interactiveHints?: string;
  matrixLabels?: {
    x?: { low: string; high: string };
    y?: { low: string; high: string };
  };
}

export interface StickyNote {
  id: string;
  text: string;
  color: string;
  x: number;
  y: number;
  sectionId?: string;
}
