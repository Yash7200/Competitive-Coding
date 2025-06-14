#include <stdio.h>
int main()
{
    int t,i,a,b,c;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&a,&b,&c);
        if((a>b)&&(a>c))
        {
            if(b>c)
            {
                printf("%d\n",b);
            }
            else if(c>b)
            {
                printf("%d\n",c);
            }
            else
            {
                printf("%d\n",b);
            }
        }
        else if((b>a)&&(b>c))
        {
            if(a>c)
            {
                printf("%d\n",a);
            }
            else if(c>a)
            {
                printf("%d\n",c);
            }
            else
            {
                printf("%d\n",a);
            }
        }
        else if((c>a)&&(c>b))
        {
            if(a>b)
            {
                printf("%d\n",a);
            }
            else if(b>a)
            {
                printf("%d\n",b);
            }
            else
            {
                printf("%d\n",a);
            }
        }
    }
	return 0;
}