import { Calendar, Clock, Star, TrendingUp, Scissors, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/barbershop-hero.jpg";
import { MonthlyChart } from "./MonthlyChart";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const mockAppointments = [
  { id: 1, service: "Corte + Barba", time: "14:00", date: "Hoje", barber: "Carlos" },
  { id: 2, service: "Corte Clássico", time: "16:30", date: "Amanhã", barber: "Pedro" },
  { id: 3, service: "Barba + Bigode", time: "10:00", date: "Sex, 16/08", barber: "João" },
];

const mockHistory = [
  { id: 1, service: "Corte + Barba", date: "10/08/2024", barber: "Carlos", price: "R$ 45,00" },
  { id: 2, service: "Corte Clássico", date: "28/07/2024", barber: "Pedro", price: "R$ 35,00" },
  { id: 3, service: "Barba Completa", date: "15/07/2024", barber: "João", price: "R$ 25,00" },
];

export function Dashboard() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAgendarAgora = () => {
    navigate('/agendamentos');
    toast({
      title: "Redirecionando",
      description: "Abrindo página de agendamentos",
    });
  };

  const handleVerTodosAgendamentos = () => {
    navigate('/agendamentos');
  };

  const handleVerHistoricoCompleto = () => {
    navigate('/historico');
  };

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl h-64 bg-gradient-card shadow-elegant">
        <img 
          src={heroImage} 
          alt="Barbershop Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Bem-vindo de volta!
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Gerencie seus agendamentos e acompanhe seu histórico de serviços
            </p>
            <Button 
              onClick={handleAgendarAgora}
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo Agendamento</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Hoje 14:00</div>
            <p className="text-xs text-muted-foreground">Corte + Barba com Carlos</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Serviços Este Mês</CardTitle>
            <Scissors className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3</div>
            <p className="text-xs text-muted-foreground">+2 comparado ao mês passado</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos Fidelidade</CardTitle>
            <Star className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">247</div>
            <p className="text-xs text-muted-foreground">53 pontos até o próximo prêmio</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border hover:shadow-glow transition-all duration-300 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economia Total</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">R$ 125</div>
            <p className="text-xs text-muted-foreground">Com descontos de fidelidade</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Próximos Agendamentos */}
        <Card className="bg-gradient-card border-border shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Próximos Agendamentos
            </CardTitle>
            <CardDescription>Seus compromissos nos próximos dias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="flex-1">
                  <div className="font-medium text-foreground">{appointment.service}</div>
                  <div className="text-sm text-muted-foreground">
                    {appointment.date} às {appointment.time} - {appointment.barber}
                  </div>
                </div>
                <Badge variant="outline" className="border-primary text-primary">
                  {appointment.date === "Hoje" ? "Hoje" : "Agendado"}
                </Badge>
              </div>
            ))}
            <Button 
              onClick={handleVerTodosAgendamentos}
              variant="outline" 
              className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver Todos os Agendamentos
            </Button>
          </CardContent>
        </Card>

        {/* Histórico Recente */}
        <Card className="bg-gradient-card border-border shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Histórico Recente
            </CardTitle>
            <CardDescription>Seus últimos serviços realizados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockHistory.map((service) => (
              <div key={service.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                <div className="flex-1">
                  <div className="font-medium text-foreground">{service.service}</div>
                  <div className="text-sm text-muted-foreground">
                    {service.date} - {service.barber}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary">{service.price}</div>
                  <div className="text-xs text-muted-foreground">+10 pontos</div>
                </div>
              </div>
            ))}
            <Button 
              onClick={handleVerHistoricoCompleto}
              variant="outline" 
              className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ver Histórico Completo
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Programa de Fidelidade */}
      <Card className="bg-gradient-card border-border shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Programa de Fidelidade
          </CardTitle>
          <CardDescription>Acumule pontos e ganhe descontos exclusivos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Progresso até o próximo prêmio</span>
              <span className="text-sm text-muted-foreground">247/300 pontos</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <div 
                className="bg-gradient-primary h-3 rounded-full transition-all duration-500 animate-glow-pulse" 
                style={{ width: '82%' }}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-lg font-bold text-primary">Novato</div>
                <div className="text-xs text-muted-foreground">0-99 pontos</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-primary/20 border border-primary">
                <div className="text-lg font-bold text-primary">Regular</div>
                <div className="text-xs text-muted-foreground">100-299 pontos</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <div className="text-lg font-bold text-primary">VIP</div>
                <div className="text-xs text-muted-foreground">300+ pontos</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gráficos de Estatísticas Mensais */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Estatísticas Mensais
          </h2>
          <p className="text-muted-foreground">
            Acompanhe o desempenho mensal da barbearia
          </p>
        </div>
        <MonthlyChart />
      </div>
    </div>
  );
}