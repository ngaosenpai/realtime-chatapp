realtime chat app

Hào Lê phát hiện bug logic:

########################################
mô tả:
vd có 3 nick A, B, C
ở nick A có list conversation là B, C. và A đang mở cuộc trò chuyện với C

ở nick B, mở cuộc trò chuện với A. và B nhắn cho A

ở nick A, push conversation vẫn hoạt động ok, tuy nhiên vì A đang mở cuộc trò chuyện với C nên xảy ra bug:
tin nhắn của B gửi cho A sẽ xuất hiện trong cuộc trò chuyện của A và C

#########################################
cách giải quyết:

đáng lẽ ở DB mình phải làm 1 model la room nữa. xong rồi list conversation là list room
ứng với từng roomId mình sẽ lưu vào store redux danh sách tin nhắn của room
lúc có tin nhắn mới sẽ so sánh roomID rồi mới lưu và mới show 
như v mới chuẩn nhất và né đc bug trên

########################################
lí do chưa giải quyết:

- phải sửa lại toàn bộ cấu trúc dữ liệu bên api, sửa lại logic hầu hết và sửa lại saga và socket bên client
- còn quá ít thời gian
- còn deadline 3 môn khác