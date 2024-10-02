export const getNowHour = () => {
  let hour = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  const greeting =
    parseInt(hour) >= 0 && parseInt(hour) < 12
      ? "Bom dia 🥱"
      : parseInt(hour) > 12 && parseInt(hour) <= 18
      ? "Boa Tarde 😊"
      : "Boa noite 😴";

  return { withoutParse: hour, parseHours: parseInt(hour), greeting };
};
