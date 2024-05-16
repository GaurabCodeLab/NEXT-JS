import AdminHeader from "@/components/AdminHeader";

const AdminLayout = ({children})=>{
return (
    <section>
        <AdminHeader />
        {children}
    </section>
)
};

export default AdminLayout;