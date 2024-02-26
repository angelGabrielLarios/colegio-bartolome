import { AboutUsSection, ContactSection, CoursesSection, GallerySection, InstallationsSection, MainSection, NoticesFacebook, RegistrationsSections } from "../API/sections";



export const RootView = () => {



    return (
        <>
            <MainSection />
            <AboutUsSection />
            <NoticesFacebook />
            <CoursesSection />
            <InstallationsSection />
            <RegistrationsSections />
            <ContactSection />
            <GallerySection />

        </>
    );
};