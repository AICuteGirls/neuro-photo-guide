import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Brain, Wand2, RefreshCw, Palette, Save, Share2, TrendingUp } from "lucide-react";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSections((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: 1,
      icon: Target,
      title: "Глубокий брейншторминг и цель",
      description: "Определите, какую историю вы хотите рассказать. Спросите себя: «Какие эмоции я хочу вызвать?» — грусть, радость, тайна, покой. Это основа вашего промпта.",
      tools: "Блокнот, доска для заметок (Miro, Notion), Pinterest для настроения и вдохновения.",
      image: "/step1.jpg"
    },
    {
      number: 2,
      icon: Brain,
      title: "Разработка «магического» промпта",
      description: "Составьте детальное текстовое описание для нейросети. Используйте формулу: [Photo type], [Subject + Action], [Environment], [Color Scheme], [Camera/Lens/Film], [Lightning], [Composition], [Additional Details].",
      tools: "ChatGPT для генерации идей, специализированные сервисы для промпт-инжиниринга.",
      image: "/step2.jpg"
    },
    {
      number: 3,
      icon: Wand2,
      title: "Выбор движка и его настройка",
      description: "Подберите правильный AI-инструмент под вашу задачу. Midjourney — король художественности. Nano Banana — для консистентного персонажа. Seedream 4 — создаёт изображения в разрешении 4К.",
      tools: "Midjourney, Nano Banana, Seedream 4",
      image: "/step3.jpg"
    },
    {
      number: 4,
      icon: RefreshCw,
      title: "Генерация и первичный отбор",
      description: "Создайте первую партию изображений и выберите лучшие заготовки. Не стремитесь к идеалу с первой генерации! Ищите удачные позы, композицию и общее настроение.",
      tools: "Используйте фразу 'uploaded person's photo' для привязки к реальному персонажу.",
      image: "/step4.jpg"
    },
    {
      number: 5,
      icon: Palette,
      title: "Пост-обработка и финальные штрихи",
      description: "Доведите изображение до совершенства, исправьте артефакты. Это этап, где вы вкладываете свою душу. Не пренебрегайте им!",
      tools: "Photoshop / GIMP / Luminar Neo, Topaz Photo AI / Gigapixel, Inpaint-функции в нейросетях.",
      image: "/step5.jpg"
    },
    {
      number: 6,
      icon: Save,
      title: "Финальное сохранение в правильном формате",
      description: "Сохраните работу в максимальном качестве для разных целей. Для портфолио и печати: TIFF или PNG максимального разрешения. Для соцсетей: JPEG высокого качества.",
      tools: "Всегда сохраняйте исходник до пост-обработки в отдельную папку.",
      image: "/step6.jpg"
    },
    {
      number: 7,
      icon: Share2,
      title: "Презентация миру",
      description: "Эффектно покажите свою работу аудитории. Расскажите историю создания! Покажите несколько вариантов и финальный результат. Это вовлекает аудиторию в ваш творческий процесс.",
      tools: "Социальные сети, Telegram-канал, личный блог или сайт.",
      image: "/step7.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Video Promo Section */}
      <section className="relative w-full bg-black">
        <div className="relative w-full aspect-video">
          <video
            src="/promo.mp4"
            controls
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="/hero.jpg"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el; }}
        className={`relative min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          visibleSections.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Художественная нейрофотография</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up">
            Создай свою вселенную
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Пошаговый план для волшебной нейрофотосессии
          </p>
          
          <div className="prose prose-invert max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-foreground/90">
              Вы когда-нибудь мечтали создавать уникальные, поражающие воображение фотографии, без камеры и аренды студии? Художественная нейрофотография — это ваш ключ к безграничному творчеству.
            </blockquote>
            <p className="text-base text-muted-foreground mt-6">
              Этот чек-лист превратит сложный процесс в простые и понятные шаги. Мы пройдём путь от «белого листа» и окошка для ввода текста до готового произведения искусства.
            </p>
            <p className="text-accent font-semibold mt-4">
              P.S. А в конце вас ждёт бонус — объяснение, почему нейрофотография стала настоящей революцией!
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="animate-fade-in-up animation-delay-600 text-lg px-8 py-6 rounded-full"
            onClick={() => {
              document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Начать путешествие
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 px-4">
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Идеальная художественная нейрофотосессия
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">за 7 шагов</p>
          
          <div className="space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              const sectionIndex = index + 1;
              
              return (
                <div
                  key={step.number}
                  ref={(el) => { sectionRefs.current[sectionIndex] = el; }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center transition-all duration-1000 ${
                    visibleSections.has(sectionIndex) ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                  }`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="relative w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-primary font-semibold mb-1">ШАГ {step.number}</div>
                          <h3 className="text-2xl font-bold text-card-foreground">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border/30">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Инструменты</div>
                        <div className="text-sm text-foreground/90">{step.tools}</div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section 
        ref={(el) => { sectionRefs.current[8] = el; }}
        className={`py-20 px-4 bg-card/30 transition-all duration-1000 ${
          visibleSections.has(8) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Революция возможностей
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Художественная нейрофотография vs. Обычная фотография
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-muted/30 border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Обычная фотография</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Привязана к реальности: нужна локация, модель, свет, реквизит</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Высокие затраты: аренда студии, оплата визажиста, модель, дорогая техника</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Доступна не всем: нужны навыки работы с камерой, светом, ретушью</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive mt-1">•</span>
                  <span>Конкуренция на уровне исполнения</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-6 text-primary relative">Художественная нейрофотография</h3>
              <ul className="space-y-4 text-foreground relative">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Свобода от ограничений:</strong> Вы создаёте миры из головы. Нет границ, кроме вашего воображения</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Экономия денег:</strong> Бесконечные «съёмки» без бюджета на локации, модели и команду</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Быстрый старт:</strong> Освоить базовый промпт-инжиниринг можно за несколько дней</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Конкуренция на уровне идей:</strong> Вы продаёте не технику, а уникальную историю</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section 
        ref={(el) => { sectionRefs.current[9] = el; }}
        className={`py-20 px-4 transition-all duration-1000 ${
          visibleSections.has(9) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <TrendingUp className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Бонус для целеустремлённых</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Кому это нужно и как на этом зарабатывают?
            </h2>
          </div>
          
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-3xl blur-2xl opacity-20"></div>
            <img 
              src="/bonus.jpg" 
              alt="Monetization" 
              className="relative w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-primary">Эксперты</h3>
              <ul className="space-y-4 text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span><strong>Зарабатывают на передаче знаний:</strong> Продажа курсов, мастер-майнд групп, индивидуальное менторство</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span><strong>Создают личный бренд:</strong> Уникальный визуальный стиль, который привлекает клиентов и партнеров</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span><strong>Продают авторские продукты:</strong> Услуги и товары с помощью красивого контент-маркетинга</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Практики</h3>
              <ul className="space-y-4 text-foreground/90">
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">→</span>
                  <span><strong>Фотографы и дизайнеры:</strong> Создают уникальные портфолио, продают NFT-арты</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">→</span>
                  <span><strong>Арт-директора, маркетологи:</strong> Создают уникальный визуал для брендов без дорогих фотостоков</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">→</span>
                  <span><strong>Авторы и блогеры:</strong> Создают обложки для книг, иллюстрации для постов</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">→</span>
                  <span><strong>Люди из других профессий:</strong> Развивают креативное мышление, открывают новый источник дохода</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Готовы превратить воображение в востребованный навык?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Записывайтесь на курс «Художественная нейрофотография с консистентным персонажем»
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full"
            onClick={() => window.open('https://t.me/neuropics_club/4715', '_blank')}
          >
            Узнать подробнее о курсе в Telegram
            <Share2 className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container text-center text-muted-foreground text-sm">
          <p>Владимир "ПовелИИтель" Толгский • <a href="https://t.me/tolgsky" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Telegram</a></p>
        </div>
      </footer>
    </div>
  );
}
