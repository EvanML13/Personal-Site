import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { jobDescription } from '../../data/reflectionData'
import Reveal from '../layout/Reveal';

type SelectedImage = { src: string; alt?: string; caption?: string };

export default function JobDescription() {

    const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
    const [zoom, setZoom] = useState({ scale: 1, originX: 50, originY: 50 });

    // Reset Zoom Whenever A New Image Is Opened
    useEffect(() => {
        setZoom({ scale: 1, originX: 50, originY: 50 });
    }, [selectedImage]);

    function handleImageClick(e: React.MouseEvent<HTMLImageElement>) {

        // Reset If The Image Is Already Zoomed In On
        if (zoom.scale > 1) {
            setZoom({ scale: 1, originX: 50, originY: 50 });
            return;
        }

        // Figue Out Where On The Image (As A %) The User Clicked And Zoom Accordingly
        const rect = e.currentTarget.getBoundingClientRect();
        const originX = ((e.clientX - rect.left) / rect.width) * 100;
        const originY = ((e.clientY - rect.top) / rect.height) * 100;
        setZoom({ scale: 2.2, originX, originY })
    }


    // Let User Escape The Lightbox By Clicking The Backdrop Or Using The Escape Key
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setSelectedImage(null);
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []); 

    return (
        <>
            <Reveal>
                <section id="job-description" className="py-20">
                    <h2 className="text-2xl font-semibold text-white mb-6">{jobDescription.header}</h2>
                    <div className="space-y-6">
                        {jobDescription.blocks.map((block, i) =>
                            block.type === "text" ? (
                                <p key={i} className="text-slate-text-slate-300 leading-relaxed whitespace-pre-line">
                                    {block.text}
                                </p>
                            ) : (
                                <motion.figure
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                >
                                    <motion.img 
                                        src={block.src}
                                        alt={block.alt}
                                        loading="lazy"
                                        onClick={() =>
                                            setSelectedImage({ src: block.src!, alt: block.alt, caption: block.caption })
                                        }
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 1.5 }}
                                        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                                        className="rounded-2xl border border-white/10 w-full cursor-zoom-in"
                                    />
                                    {block.caption && (
                                        <figcaption className="text-sm text-slate-500 mt-2 text-center">
                                            {block.caption}
                                        </figcaption>
                                    )}
                                </motion.figure>
                            )
                        )}
                    </div>
                </section>
            </Reveal>

            {/* Lightweight Overlay Rendered Outside The Section So It Sits Above Everything */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
                    >
                        <motion.figure
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()} // Don't Close When Clicking The Image Itself
                            className="max-w-4xl max-h-[95vh]"        
                        >
                            <motion.img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                onClick={handleImageClick}
                                animate={{
                                    scale: zoom.scale,
                                    transformOrigin: `${zoom.originX}% ${zoom.originY}%`,
                                }}
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                className={`max-h-[85vh] w-auto ${zoom.scale > 1 ? "cursor-zoom-out" : "cursor-zoom-in"}`}
                            />
                            {selectedImage.caption && (
                                <figcaption className="text-sm text-slate-400 mt-3 text-center">
                                    {selectedImage.caption}
                                </figcaption>
                            )}
                        </motion.figure>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
