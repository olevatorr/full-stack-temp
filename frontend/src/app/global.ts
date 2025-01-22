import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

let lenisInstance: Lenis | null = null;

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // 只創建一個 Lenis 實例
  lenisInstance = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    // 移除 infinite 選項，避免邊界異常
    wheelMultiplier: 1,
    // 添加停止邊界
    lerp: 0.3 // 降低插值係數，使滾動更平滑
  });

  // Lenis 與 GSAP ScrollTrigger 的整合
  lenisInstance.on('scroll', ScrollTrigger.update);

  // 將 Lenis 更新綁定到 GSAP 的 ticker
  gsap.ticker.add(time => {
    lenisInstance?.raf(time * 1000);
  });

  // 確保 ScrollTrigger 在 Lenis 滾動時正確更新
  gsap.ticker.lagSmoothing(0);
}

export default lenisInstance;
