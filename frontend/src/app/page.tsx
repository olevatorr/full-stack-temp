const words = {
  title: 'Hello World'
};

export default function Home() {
  return (
    <>
      <main className='container'>
        <div className='min-h-[200dvh]'>{words.title}</div>
      </main>
    </>
  );
}
