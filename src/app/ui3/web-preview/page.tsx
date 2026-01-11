import Ui3Shell from "@/components/ui3/Ui3Shell";
import View from "@/components/ui3/pages/WebHome";

export default function Page() {
  return (
    <Ui3Shell activeView="web-preview">
      <View />
    </Ui3Shell>
  );
}
