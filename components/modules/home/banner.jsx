import GridMotionBackground from "@/components/io/grid-motion-background";
export default function GridMotionBackgroundDemo() {
  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      <GridMotionBackground
        items={[
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&sat=-100",
          "https://images.unsplash.com/photo-1418065460487-3956ef847988?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&hue=60",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&sat=2",
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&hue=180",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&hue=120",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&sepia=80",
          "https://images.unsplash.com/photo-1418065460487-3956ef847988?w=300&h=300&fit=crop&sat=-50",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&blur=1",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&hue=240",
          "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=300&h=300&fit=crop&sat=2",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop&hue=300",
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&contrast=2",
          "https://images.unsplash.com/photo-1418065460487-3956ef847988?w=300&h=300&fit=crop&hue=90",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop&sat=2",
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=300&fit=crop&hue=45",
          "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=300&h=300&fit=crop&hue=200",
        ]}
        gradientColor="white"
        maxMoveAmount={280}
        baseDuration={0.7}
        gridRows={4}
        gridCols={7}
        rotation={-18}
      />
    </div>
  );
}
