import type { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id:'quantum-orbitals', level:'Tầng 1 · Nền tảng & Đại cương', category:'Cấu tạo nguyên tử', title:'Số lượng tử & Orbital nguyên tử', subtitle:'Mô tả trạng thái electron bằng cơ học lượng tử', duration:'35 phút',
    objectives:['Phân biệt bốn số lượng tử n, l, m_l và m_s.','Suy ra số orbital, số electron cực đại của một phân lớp.','Áp dụng nguyên lý Pauli, quy tắc Hund và nguyên lý vững bền.'],
    definition:'Orbital nguyên tử là hàm sóng một electron (hoặc trạng thái không gian một electron) được đặc trưng bởi các số lượng tử. |ψ|² biểu diễn mật độ xác suất tìm thấy electron tại một vị trí; orbital không phải quỹ đạo cổ điển.',
    formula:'n = 1,2,3,…;  l = 0,…,n−1;  m_l = −l,…,+l;  m_s = ±1/2',
    theory:['Số lượng tử chính n xác định lớp electron, kích thước và phần lớn năng lượng của orbital trong nguyên tử hydrogen-like.','Số lượng tử phụ l xác định phân lớp và mômen động lượng orbital: l = 0, 1, 2, 3 tương ứng s, p, d, f.','Số lượng tử từ m_l xác định hình chiếu của mômen động lượng lên trục z; mỗi giá trị m_l ứng với một orbital trong phân lớp.','Số lượng tử spin m_s có hai giá trị ±1/2. Theo nguyên lý loại trừ Pauli, không có hai electron trong cùng nguyên tử có đủ bốn số lượng tử giống nhau.','Một phân lớp có 2l+1 orbital và chứa tối đa 2(2l+1) electron. Một lớp n có n² orbital và tối đa 2n² electron.'],
    example:{title:'Xác định số orbital và sức chứa của phân lớp 3d',steps:['Với 3d: n = 3 và l = 2.','m_l nhận các giá trị −2, −1, 0, +1, +2 nên có 2l+1 = 5 orbital.','Mỗi orbital chứa tối đa 2 electron có spin đối song song.'],result:'Phân lớp 3d có 5 orbital và chứa tối đa 10 electron.'},
    caveats:['Trong nguyên tử nhiều electron, năng lượng orbital phụ thuộc cả n và l; quy tắc n+l là quy tắc gần đúng để dự đoán thứ tự điền electron.','Các orbital p_x, p_y, p_z là tổ hợp tuyến tính của các trạng thái có m_l xác định; tránh đồng nhất m_l với một hướng Cartesian duy nhất.'],
    questions:[
      {id:'q1',difficulty:'Cơ bản',prompt:'Phân lớp 4p có bao nhiêu orbital?',options:['1','3','5','7'],answer:'3',explanation:['Với phân lớp p, l = 1.','Số orbital bằng 2l+1 = 3.']},
      {id:'q2',difficulty:'Vận dụng',prompt:'Số electron tối đa của lớp n = 3 là bao nhiêu?',options:['8','18','32','6'],answer:'18',explanation:['Tổng số orbital của lớp n là n² = 9.','Mỗi orbital chứa tối đa hai electron nên sức chứa là 2n² = 18.']},
      {id:'q3',difficulty:'Chuyên sâu Đại học',prompt:'Một electron có n = 3, l = 2, m_l = +1. Giá trị m_s nào được phép?',options:['0','+1','−1/2 hoặc +1/2','Chỉ +1/2'],answer:'−1/2 hoặc +1/2',explanation:['n, l, m_l mô tả trạng thái không gian và đều thỏa điều kiện lượng tử.','Số lượng tử spin độc lập nhận một trong hai giá trị +1/2 hoặc −1/2.']},
    ]
  },
  {
    id:'cft-complexes', level:'Tầng 2 · Vô cơ chuyên sâu', category:'Hóa học phức chất', title:'Thuyết trường tinh thể (CFT)', subtitle:'Tách mức năng lượng d, spin và từ tính của phức chất', duration:'42 phút',
    objectives:['Giải thích sự tách mức orbital d trong trường bát diện và tứ diện.','Phân biệt phức spin cao và spin thấp thông qua Δ và năng lượng ghép đôi P.','Liên hệ cấu hình d với từ tính và màu sắc phức chất.'],
    definition:'Thuyết trường tinh thể xem tương tác giữa ion kim loại trung tâm và phối tử như tương tác tĩnh điện. Trường phối tử làm mất suy biến của năm orbital d, tạo các nhóm mức năng lượng khác nhau.',
    formula:'Bát diện: t_{2g}: −0.4Δ_o;  e_g: +0.6Δ_o   |   Tứ diện: e: −0.6Δ_t;  t_2: +0.4Δ_t',
    theory:['Trong trường bát diện, sáu phối tử tiếp cận theo các trục Cartesian; orbital d_x²−y² và d_z² hướng trực diện phối tử nên thuộc nhóm e_g năng lượng cao. Ba orbital d_xy, d_xz, d_yz thuộc t_2g năng lượng thấp.','Độ tách mức Δ_o cạnh tranh với năng lượng ghép đôi P. Với cấu hình d⁴–d⁷, Δ_o nhỏ thường ưu tiên spin cao; Δ_o lớn có thể tạo spin thấp.','Số electron độc thân quyết định mômen từ spin-only gần đúng: μ_eff = √[n(n+2)] BM, trong đó n là số electron độc thân.','Hấp thụ ánh sáng khả kiến có thể kích thích chuyển d–d; màu quan sát là màu bổ sung của vùng ánh sáng bị hấp thụ. Quy tắc Laporte và quy tắc spin ảnh hưởng cường độ dải hấp thụ.','Với trường tứ diện, độ tách mức thường nhỏ hơn: Δ_t ≈ 4/9 Δ_o đối với cùng kim loại và phối tử tương ứng; do đó phức tứ diện thường spin cao.'],
    example:{title:'Phân tích [Fe(CN)₆]⁴⁻',steps:['Số oxi hóa Fe: x + 6(−1) = −4, suy ra x = +2; Fe²⁺ có cấu hình d⁶.','CN⁻ là phối tử trường mạnh, tạo Δ_o lớn so với P.','Phức bát diện spin thấp: t₂g⁶ e_g⁰; tất cả electron ghép đôi.','Số electron độc thân n = 0 nên phức nghịch từ theo mô hình spin-only.'],result:'[Fe(CN)₆]⁴⁻ là phức bát diện d⁶ spin thấp, nghịch từ.'},
    caveats:['Thứ tự trường phổ hóa học là thực nghiệm và phụ thuộc kim loại, số oxi hóa, hình học và phối tử; không phải quy tắc tuyệt đối cho mọi hệ.','CFT thuần túy không mô tả đầy đủ tính cộng hóa trị kim loại–phối tử; thuyết trường phối tử và MO là mô hình mở rộng.'],
    questions:[
      {id:'q1',difficulty:'Cơ bản',prompt:'Trong trường bát diện, nhóm orbital d nào có năng lượng cao hơn?',options:['t₂g','e_g','Hai nhóm bằng nhau','Không thể xác định'],answer:'e_g',explanation:['Hai orbital e_g hướng trực tiếp về phía các phối tử trên trục.','Lực đẩy tĩnh điện lớn hơn làm e_g có năng lượng cao hơn t₂g.']},
      {id:'q2',difficulty:'Vận dụng',prompt:'Ion Mn²⁺ có cấu hình d⁵. Trong trường bát diện spin cao, có bao nhiêu electron độc thân?',options:['1','2','3','5'],answer:'5',explanation:['Mn²⁺: [Ar]3d⁵.','Trường spin cao phân bố đơn electron vào cả năm orbital d trước khi ghép đôi, nên có 5 electron độc thân.']},
      {id:'q3',difficulty:'Chuyên sâu Đại học',prompt:'Phức bát diện d⁶ spin thấp có số electron độc thân bằng bao nhiêu?',options:['0','2','4','6'],answer:'0',explanation:['Spin thấp d⁶ có cấu hình t₂g⁶e_g⁰.','Ba orbital t₂g đều được lấp đầy theo cặp; không còn electron độc thân.']},
    ]
  },
  {
    id:'sn1-sn2', level:'Tầng 3 · Hóa hữu cơ hiện đại', category:'Cơ chế phản ứng', title:'Cơ chế thế nucleophile Sᴺ1 / Sᴺ2', subtitle:'Động học, trung gian phản ứng và lập thể hóa học', duration:'48 phút',
    objectives:['So sánh định luật tốc độ của Sᴺ1 và Sᴺ2.','Dự đoán ảnh hưởng của cấu trúc cơ chất, nucleophile và dung môi.','Giải thích racemic hóa và nghịch đảo cấu hình Walden.'],
    definition:'Phản ứng thế nucleophile là quá trình một nucleophile thay thế nhóm đi ra tại nguyên tử carbon điện dương (thường là carbon sp³). Hai giới hạn cơ chế kinh điển là thế một phân tử (Sᴺ1) và thế hai phân tử (Sᴺ2).',
    formula:'S_N1: v = k[RX]   |   S_N2: v = k[RX][Nu^-]',
    theory:['Sᴺ2 diễn ra trong một giai đoạn phối hợp: nucleophile tấn công từ phía đối diện liên kết C–LG, đồng thời liên kết C–Nu hình thành và C–LG đứt. Trạng thái chuyển tiếp có liên kết một phần.','Sᴺ2 có động học bậc hai, bị cản trở không gian mạnh; thứ tự thuận lợi thường CH₃X > RCH₂X > R₂CHX >> R₃CX. Nucleophile mạnh và dung môi phân cực không proton thường có lợi.','Sᴺ1 gồm ion hóa tạo carbocation rồi nucleophile tấn công. Bước tạo carbocation thường quyết định tốc độ nên v = k[RX]. Cơ chất tạo carbocation bền và dung môi phân cực proton thường thuận lợi.','Carbocation phẳng có thể bị tấn công từ hai mặt, dẫn đến racemic hóa hoặc hỗn hợp lập thể; ion-pair và hiệu ứng dung môi có thể làm sản phẩm lệch khỏi racemic hoàn toàn.','Nhóm đi ra tốt là nhóm bền sau khi rời đi; khả năng rời đi chịu ảnh hưởng của tính base, phân cực liên kết và môi trường phản ứng.'],
    example:{title:'Dự đoán cơ chế của 2-bromobutane với CN⁻ trong DMSO',steps:['Cơ chất là halogenoalkane bậc hai, có cản trở không gian đáng kể hơn bậc một.','CN⁻ là nucleophile mạnh; DMSO là dung môi phân cực không proton giúp tăng hoạt tính nucleophile anion.','Cơ chế Sᴺ2 có thể cạnh tranh với E2 tùy nhiệt độ và điều kiện; ở điều kiện thế ưu tiên, tấn công backside tạo nghịch đảo cấu hình tại tâm phản ứng.'],result:'Sᴺ2 là hướng dự đoán hợp lý khi CN⁻ mạnh và dung môi DMSO; cần nêu rõ cạnh tranh E2 ở cơ chất bậc hai.'},
    caveats:['Không có một tiêu chí riêng lẻ đủ để xác định cơ chế; phải xét đồng thời cơ chất, nucleophile/base, dung môi, nhóm đi ra và nhiệt độ.','Sᴺ1 không đồng nghĩa mọi trường hợp cho racemic 50:50; cặp ion và môi trường lồng có thể duy trì tính định hướng.'],
    questions:[
      {id:'q1',difficulty:'Cơ bản',prompt:'Định luật tốc độ đặc trưng của Sᴺ2 là gì?',options:['v = k[RX]','v = k[Nu⁻]','v = k[RX][Nu⁻]','v = k[RX]²'],answer:'v = k[RX][Nu⁻]',explanation:['Sᴺ2 có một bước phối hợp, trong trạng thái chuyển tiếp có cả cơ chất và nucleophile.','Do đó tốc độ phụ thuộc nồng độ của cả hai chất.']},
      {id:'q2',difficulty:'Vận dụng',prompt:'Sản phẩm lập thể đặc trưng của Sᴺ2 tại tâm carbon bất đối là gì?',options:['Giữ cấu hình','Nghịch đảo cấu hình','Racemic hoàn toàn','Mất tính đối quang'],answer:'Nghịch đảo cấu hình',explanation:['Nucleophile tấn công từ phía đối diện nhóm đi ra.','Sự đảo mặt tấn công dẫn đến nghịch đảo cấu hình Walden.']},
      {id:'q3',difficulty:'Chuyên sâu Đại học',prompt:'Yếu tố nào thường làm tăng tốc độ Sᴺ1?',options:['Tăng nồng độ nucleophile','Tạo carbocation bền hơn','Tăng cản trở nucleophile','Dùng dung môi không phân cực'],answer:'Tạo carbocation bền hơn',explanation:['Bước chậm Sᴺ1 là ion hóa tạo carbocation.','Ổn định trạng thái chuyển tiếp và carbocation làm giảm năng lượng hoạt hóa, tăng tốc độ.']},
    ]
  },
  {
    id:'h1-nmr', level:'Tầng 3 · Hóa hữu cơ hiện đại', category:'Phổ học', title:'Phổ cộng hưởng từ hạt nhân ¹H-NMR', subtitle:'Độ chuyển dịch hóa học, tích phân và quy tắc tách vạch', duration:'40 phút',
    objectives:['Đọc số tín hiệu và môi trường proton tương đương.','Liên hệ δ với môi trường điện tử và hiệu ứng che chắn.','Sử dụng tích phân và quy tắc n+1 để diễn giải phổ bậc một.'],
    definition:'¹H-NMR khảo sát sự hấp thụ cộng hưởng của hạt nhân ¹H trong từ trường ngoài. Tần số cộng hưởng phụ thuộc môi trường điện tử quanh proton; phổ thường được biểu diễn theo độ chuyển dịch hóa học δ (ppm) so với chất chuẩn.',
    formula:'δ (ppm) = [(ν_sample − ν_ref) / ν_0] × 10⁶   |   bậc một: số vạch = n + 1',
    theory:['Proton được che chắn bởi mật độ electron; che chắn mạnh thường xuất hiện ở δ nhỏ (upfield), khử che chắn thường xuất hiện ở δ lớn (downfield).','Số tín hiệu phản ánh số môi trường proton hóa học không tương đương, có xét đối xứng phân tử và trao đổi proton.','Tích phân diện tích tín hiệu tỷ lệ với số proton đóng góp; tích phân tương đối giúp suy ra tỷ lệ nhóm CH₃, CH₂, CH.','Trong phổ bậc một, một nhóm proton ghép với n proton tương đương lân cận thường tạo n+1 vạch. Khoảng cách vạch là hằng số ghép J (Hz).','Các vùng δ chỉ mang tính định hướng: alkyl thường khoảng 0.5–2 ppm; gần dị nguyên tử hoặc π thường dịch xuống trường; aldehyde khoảng 9–10 ppm và acid carboxylic thường rất rộng, khoảng 10–13 ppm.'],
    example:{title:'Diễn giải phổ đơn giản của ethanol',steps:['CH₃CH₂OH có ba môi trường proton thường quan sát được: CH₃, CH₂ và OH.','CH₃ kề CH₂ (2 proton lân cận) thường là triplet; CH₂ kề CH₃ (3 proton lân cận) thường là quartet.','Tích phân tương đối lý tưởng là 3:2:1; proton OH có thể rộng và vị trí thay đổi theo dung môi, nồng độ, nhiệt độ và trao đổi proton.'],result:'Phổ ethanol điển hình có triplet (3H), quartet (2H) và tín hiệu OH (1H), với J của cặp CH₃/CH₂ tương ứng gần bằng nhau.'},
    caveats:['Quy tắc n+1 chỉ áp dụng trực tiếp cho ghép bậc một khi các hằng số ghép và độ chênh tần số thỏa điều kiện; hệ bậc hai có mẫu phức tạp hơn.','Proton OH/NH có thể không tuân quy tắc ghép đơn giản do trao đổi hóa học; phép thử D₂O có thể hỗ trợ nhận diện.'],
    questions:[
      {id:'q1',difficulty:'Cơ bản',prompt:'Đơn vị phổ biến của độ chuyển dịch hóa học δ là gì?',options:['Hz','ppm','Tesla','J mol⁻¹'],answer:'ppm',explanation:['Độ chuyển dịch hóa học được chuẩn hóa theo tần số máy và biểu diễn theo phần triệu.','Nhờ đó giá trị δ có thể so sánh giữa các từ trường khác nhau.']},
      {id:'q2',difficulty:'Vận dụng',prompt:'Một nhóm proton ghép với 2 proton lân cận tương đương thường cho bao nhiêu vạch theo quy tắc n+1?',options:['2','3','4','5'],answer:'3',explanation:['Với n = 2, số vạch = n+1 = 3.','Tín hiệu được gọi là triplet trong điều kiện bậc một.']},
      {id:'q3',difficulty:'Chuyên sâu Đại học',prompt:'Trong phổ ¹H-NMR bậc một, đại lượng nào được suy ra gần đúng từ diện tích tích phân?',options:['Khối lượng phân tử','Số proton tương đối của mỗi môi trường','Số nguyên tử carbon','Độ bền nhiệt'],answer:'Số proton tương đối của mỗi môi trường',explanation:['Diện tích tín hiệu tỷ lệ với số hạt nhân ¹H đóng góp vào tín hiệu.','Chuẩn hóa các tích phân cho tỷ lệ proton giữa các môi trường hóa học.']},
    ]
  },
];

export const topicGroups = [
  { id:'foundation', title:'Tầng 1 · Nền tảng & Hóa đại cương', items:[
    ['quantum-orbitals','Cấu tạo nguyên tử & số lượng tử'],['orbitals','Hình dạng & năng lượng orbital'],['vb-hybrid','Thuyết liên kết hóa trị & lai hóa'],['mo-theory','Thuyết orbital phân tử'],['thermo','Nhiệt động học hóa học'],['kinetics','Động hóa học & cân bằng']
  ]},
  { id:'inorganic', title:'Tầng 2 · Hóa vô cơ chuyên sâu', items:[
    ['s-p-block','Hóa học nguyên tố nhóm s, p'],['d-f-block','Kim loại chuyển tiếp d, f'],['cft-complexes','Phức chất · danh pháp IUPAC · CFT'],['magnetism','Từ tính & màu sắc phức chất']
  ]},
  { id:'organic', title:'Tầng 3 · Hóa hữu cơ hiện đại', items:[
    ['stereo','Hóa lập thể E/Z, R/S & cấu dạng'],['sn1-sn2','Cơ chế Sᴺ1, Sᴺ2, E1, E2'],['pericyclic','Phản ứng pericyclic'],['h1-nmr','Phổ ¹H-NMR · ¹³C-NMR · IR · MS']
  ]},
  { id:'lab', title:'Tầng 4 · Phòng thí nghiệm & công cụ', items:[
    ['molecule','Trình xem phân tử 3D'],['virtual-lab','Phòng thí nghiệm ảo'],['chem-tools','Chem-Tools · tính toán'],['flashcards','Sổ tay & Flashcard cá nhân']
  ]},
];
