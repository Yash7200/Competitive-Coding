#include <stdio.h>

int main()

{
    int t,suma=0,sumb=0,leada=0,leadb=0;
    scanf("%d",&t);
    int a[t],b[t];
    for(int i=0;i<t;i++)
    {
        scanf("%d %d",&a[i],&b[i]);
        suma=suma+a[i];
        sumb=sumb+b[i];
        if(suma>sumb)
        {
            if((suma-sumb)>leada)
            {
                leada=suma-sumb;
            }
        }
        else if(sumb>suma)
        {
            if((sumb-suma)>leadb)
            {
                leadb=sumb-suma;
            }
        }
    }
    if(leada>leadb)
    {
        printf("1 %d\n",leada);
    }
    else if(leadb>leada)
    {
        printf("2 %d\n",leadb);
    }
    return 0;
}
