type data = {
  data: any;
};

type JSONValue = string | number | data | boolean | JSONObject | JSONArray;

interface JSONObject {
  [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> { }

export const Jewelry = {
  ring: 'Кольцо',
  earrings: 'Серьги',
  pendant: 'Подвеска',
  bracelet: 'Браслет',
  brooch: 'Брошь',
  chain: 'Цепь',
  necklace: 'Колье',
  piercing: 'Пирсинг',
  watch: 'Часы',
  charm: 'Шарм',
  cufflinks: 'Запонки',
  tie_clip: 'Зажим для галстука',
};

export function StatusInformation(status: string) {
  switch (status) {
    case 'pending':
      return ['В ожидании', 'warning'];
    case 'rejected':
      return ['Отклонено', 'danger'];
    case 'approved':
      return ['Одобрено', 'success'];
    default:
      return ['Не известно', 'warning'];
  }
}

export interface UserAvatar {
  userAvatar: string;
}
