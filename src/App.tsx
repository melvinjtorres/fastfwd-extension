import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Zap, BarChart2, Coffee, Settings } from 'lucide-react';

function App() {
  const [skipSpeed, setSkipSpeed] = useState(2);
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="w-80 bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Zap className="text-orange-500 mr-2" />
          <h1 className="text-xl font-bold">fastfwd</h1>
        </div>
        <Switch
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
          className="bg-orange-500"
        />
      </div>

      <div className="bg-gray-800 rounded-full p-4 mb-4">
        <div className="text-center">
          <span className="text-4xl font-bold">{skipSpeed}x</span>
          <p className="text-sm text-gray-400">Skip Speed</p>
        </div>
      </div>

      <Slider
        value={[skipSpeed]}
        onValueChange={(value) => setSkipSpeed(value[0])}
        min={1}
        max={5}
        step={0.5}
        className="mb-6"
      />

      <div className="flex justify-between">
        <Button variant="ghost" size="icon">
          <Zap className="h-5 w-5 text-orange-500" />
        </Button>
        <Button variant="ghost" size="icon">
          <BarChart2 className="h-5 w-5 text-gray-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <Coffee className="h-5 w-5 text-gray-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-400" />
        </Button>
      </div>
    </div>
  );
}

export default App;