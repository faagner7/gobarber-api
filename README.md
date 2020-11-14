## DOCKER CONTAINER NAME:

- gostack_postgress;

## DATABASE NAME

# MACBOOK -> "gostack_gobarber"

# UBUNTU -> "postgres"

# Recuperação de senha

**RF (Recursos Funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (Recursos Não Funcionais - não ligadas a regra de negócio, mais ligadas a parte técnica - libs, banco de dados -)**

- Utilizar Mailtrap para testar envios em abiente de dev;
- Utilizar Amazon SES (barato e fácil de integrar) para envios de e-mail em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regras de Negócio)**

- O link eviado por e-mail para resetar senha, deve exprirar em 2h;
- O usuário precisa confirmar a nova senha, ao resetar sua senha;

# Atualização do perfil

**RF (Recursos Funcionais)**

- O usuário deve poder atualizar seu nome, email e senha;

**RN (Regras de Negócio)**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a sua senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

**RNF (Recursos Não Funcionais - não ligadas a regra de negócio, mais ligadas a parte técnica - libs, banco de dados -)**

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
  -> (sempre que houver um novo agendamento, reseta o cache e mostra a 'nova' lista);
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io (lib js);
  Socket.io -> protocólo de atualização em tempo real;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um m\*es com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;
  -> (sempre que houver um novo prestador, reseta o cache e mostra a 'nova' lista);

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou (passado);
- O usuário não pode agendar serviços consigo mesmo;
