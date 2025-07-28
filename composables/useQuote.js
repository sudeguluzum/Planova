export function useQuote() {
  const quote = ref('');
  const author = ref('');

  const fetchQuote = async () => {
    try {
      const res = await fetch('api/quote');
      const data = await res.json();
      quote.value = data[0].q;
      author.value = data[0].a;
    } catch (error) {
      console.error('Alıntı alınamadı:', error);
    }
  };

  onMounted(() => {
    fetchQuote();
  });

  return { quote, author };
}