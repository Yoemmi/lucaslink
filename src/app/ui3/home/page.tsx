import Ui3Shell from "@/components/ui3/Ui3Shell";
import View from "@/components/ui3/pages/Home";

export default function Page() {
  return (
    <Ui3Shell activeView="home">
      <View />
    </Ui3Shell>
  );
}
