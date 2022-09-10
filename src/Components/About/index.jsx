import './About.css';

export function About() {
  return (
    <div className='about'>
      <div className='about-text'>
        <p className='about-text-main'>
        Мы адукацыйная платформа, якая дапаможа адкрываць, развіваць, маштабаваць крэатыўны бізнес з Беларусі
        </p>
        <p className='about-text-secondary'>
        Текст придумать надодпочитаем делать простые, удобные интерфейсы, которые интуитивно понятны пользователям. 
        <br /><br />
Наши проекты отличаются высоким уровнем визуального дизайна, что отмечает международное и российское экспертное жюри.
        </p>
      </div>
      <div className='about-numbers'>
        <div>
          <p className='about-number'>600+</p>
          <p className='about-desc'>Курсау </p>
        </div>
        <div>
          <p className='about-number'>500+</p>
          <p className='about-desc'>Проектов на Behance</p>
        </div>
        <div>
          <p className='about-number'>150</p>
          <p className='about-desc'>Отраслевых наград</p>
        </div>
      </div>
    </div>
  )
}