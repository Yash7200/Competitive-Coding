#include <stdio.h>
int main()
{
    int t,n;
    float x,y,a,b;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d %f %f %f %f",&n,&x,&y,&a,&b);
        float pc=((n/a)*x);
        float dc=((n/b)*y);
        if(pc==dc)
        {
            printf("ANY\n");
        }
        else if(pc<dc)
        {
            printf("PETROL\n");
        }
        else if(pc>dc)
        {
            printf("DIESEL\n");
        }
    }
    return 0;
}
