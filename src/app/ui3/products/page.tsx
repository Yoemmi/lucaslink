import Ui3Shell from "@/components/ui3/Ui3Shell";
import View from "@/components/ui3/pages/Products";

export default function Page() {
  return (
    <Ui3Shell activeView="products">
      <View />
    </Ui3Shell>
  );
}
