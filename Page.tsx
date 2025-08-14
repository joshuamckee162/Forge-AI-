import VehicleViewer from "@/components/VehicleViewer";
import RunTestDrive from "@/components/RunTestDrive";
import TestDriveHUD from "@/components/TestDriveHUD";

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Forge AI Vehicle Designer</h1>
      <VehicleViewer />
      <RunTestDrive />
      <TestDriveHUD />
    </main>
  );
}
