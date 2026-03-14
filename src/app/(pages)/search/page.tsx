import { Section1 } from "../../components/section1/Section1";

import { SearchContainer } from "./SearchContainer";

export default function SearchPage() {
  return (
    <>
      <Section1 />
      {/* Section 3: Kết quả tìm kiếm */}
      <SearchContainer />
      {/* End Section 3 */}
    </>
  );
}