#include <stdio.h>
int main(void)
{
    int t,D,d,a,b,c;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d%d%d",&D,&d,&a,&b,&c);
        if((D*d)<10)
        {
            printf("0\n");
        }
        else if(((D*d)>=10)&&((D*d)<21))
        {
            printf("%d\n",a);
        }
        else if(((D*d)>=21)&&((D*d)<42))
        {
            printf("%d\n",b);
        }
        else if((D*d)>=42)
        {
            printf("%d\n",c);
        }
    }
	return 0;
}
