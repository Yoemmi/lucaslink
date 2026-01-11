import Ui3Shell from "@/components/ui3/Ui3Shell";
import View from "@/components/ui3/pages/Dashboard";

export default function Page() {
  return (
    <Ui3Shell activeView="dashboard">
      <View />
    </Ui3Shell>
  );
}
