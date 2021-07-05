from math import ceil 

visualizacao = None;

cliques = None;

compartilha = None;

investimento = int(input("Digite o valor a ser investido:"));

print("O valor investido é: ", investimento);

visualizacao = investimento * 30;

for i in range(4):
    cliques =  ceil(visualizacao * 12 / 100); 
    compartilha = ceil(cliques * 3 / 20);
    visualizacao = visualizacao + (compartilha * 40);
    i = i + 1
print("Total de visualizações: ", visualizacao);