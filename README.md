# ChemAcademy — Academic Chemistry Workspace

Một workspace học tập hóa học trình độ đại học được xây dựng bằng **React, TypeScript, Vite, Tailwind CSS, KaTeX và Lucide React**.

## Chạy ứng dụng

Yêu cầu Node.js 18+.

```bash
npm install
npm run dev
```

Mở URL Vite in ra trong terminal (thường là `http://localhost:5173`). Để tạo bản production:

```bash
npm run build
npm run preview
```

## Cấu trúc thư mục

```text
src/
  components/
    ChemEquation.tsx
    EquationBalancerTool.tsx
    FlashcardDeck.tsx
    MoleculeViewer3D.tsx
    MolarMassTool.tsx
    SolutionNernstTool.tsx
    VirtualLab.tsx
  data/
    lessons.ts
  types/
    index.ts
  utils/
    chemEngine.ts
    chemFormat.ts
  App.tsx
  index.css
  main.tsx
```

## Tính năng hiện có

- Workspace 3 vùng: header, cây kiến thức 4 tầng có thể thu gọn, vùng nội dung; Light/Dark mode.
- Command palette với `Ctrl + K` / `Cmd + K`, phím mũi tên và Enter.
- Bốn bài học mẫu: số lượng tử & orbital, CFT, cơ chế Sᴺ1/Sᴺ2 và ¹H-NMR. Mỗi bài có phần lý thuyết, công thức KaTeX, ví dụ giải từng bước và ba câu hỏi ở ba cấp độ.
- Molar mass parser hỗ trợ ngoặc lồng `()`, `[]`, hydrate `·`/`.` và bảng % khối lượng. Dữ liệu nguyên tố gồm 118 nguyên tố; nguyên tố không có trọng lượng nguyên tử chuẩn dùng số khối đồng vị đại diện.
- Bộ cân bằng phản ứng dùng ma trận bảo toàn nguyên tố/điện tích và khử Gauss–Jordan; đầu ra phương trình được dựng bằng KaTeX.
- Bộ tính nồng độ mol, % khối lượng, pha loãng, pH axit/bazơ mạnh/yếu bằng nghiệm bậc hai và Nernst ở nhiệt độ tùy chỉnh.
- Trình xem 3D truy xuất SDF 3D/2D từ PubChem PUG REST và dùng 3Dmol.js qua CDN; có sáu cấu trúc fallback nhỏ khi API không có dữ liệu.
- Virtual Lab có nhận biết ion/phức chất, cơ chế Sᴺ2/Sᴺ1/E2/cộng HBr và đường chuẩn độ HCl/NaOH, CH₃COOH/NaOH, H₃PO₄/NaOH.
- Flashcard lưu tự động trong `localStorage`, có lật thẻ, trạng thái ghi nhớ và nhập/xuất JSON.

## Ghi chú khoa học và giới hạn mô hình

1. **PubChem/3Dmol:** Trình xem cần kết nối Internet. 3Dmol.js được nạp từ CDN và cấu trúc được truy xuất động; không có bộ dữ liệu 3D nặng đi kèm. Nếu PubChem không phản hồi, sáu cấu trúc nhỏ trong mã được dùng làm fallback. Fallback cyclohexane là tọa độ minh họa phẳng (không phải cấu dạng ghế đã tối ưu); cisplatin fallback cũng chỉ là hình học sơ đồ. Ưu tiên bản ghi PubChem khi có.
2. **Cân bằng phương trình:** Bộ giải tối giản hóa nghiệm nguyên dương trong không gian nghiệm có tối đa bốn biến tự do. Cú pháp ion khuyến nghị `Fe^2+`, `Cr2O7^2-`; dùng dấu cộng có khoảng trắng để phân tách chất, ví dụ `Fe^2+ + H+`.
3. **Hóa lý:** pH dung dịch yếu dùng nghiệm phương trình bậc hai; đường chuẩn độ H₃PO₄ dùng cân bằng điện tích với ba hằng số phân ly ở 25 °C. Các mô hình mặc định giả thiết dung dịch lý tưởng, chưa hiệu chỉnh hệ số hoạt độ, ghép ion hay ảnh hưởng lực ion.
4. **Hằng số cân bằng trong Virtual Lab** là giá trị tham khảo/đại diện. Ksp và hằng số bền phụ thuộc nhiệt độ, dạng rắn, lực ion và quy ước hoạt độ; không sử dụng thay cho dữ liệu thực nghiệm của một hệ cụ thể.
5. **Nội dung bài học** là bộ dữ liệu mẫu để trải nghiệm giao diện và ôn tập, không phải giáo trình hoàn chỉnh hoặc công cụ chứng nhận danh pháp IUPAC. Với tên phức chất, lập thể, phổ học hay số liệu nghiên cứu, cần đối chiếu tài liệu IUPAC và nguồn chuyên ngành tương ứng trước khi dùng trong báo cáo/chấm điểm chính thức.

## Phụ thuộc ngoài

- PubChem PUG REST: `https://pubchem.ncbi.nlm.nih.gov/rest/pug/`
- 3Dmol.js CDN: `https://3Dmol.org/build/3Dmol-min.js`
- KaTeX CSS/renderer: package `katex`

Không có API key được nhúng trong ứng dụng.

- Ở pH nồng độ rất loãng, các hàm axit/bazơ mạnh và yếu có xét thêm cân bằng tự phân ly của nước (`K_w`); với dung dịch yếu ở nồng độ thông thường, nghiệm bậc hai đầy đủ được dùng thay cho xấp xỉ `x ≪ C`.
- Trong cây kiến thức, mục **Chem-Tools** mở một trang tổng hợp có tab cho phân tử khối, cân bằng phương trình và dung dịch/Nernst.
