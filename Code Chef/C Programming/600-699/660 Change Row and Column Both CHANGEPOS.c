#include <stdio.h>
int main()
{
    int t,a,b,c,d;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d%d",&a,&b,&c,&d);
        int cnt=0;
        if((a!=c)&&(b!=d))
        {
            printf("1\n");
        }
        else
        {
            if(a==c)
            {
                cnt++;
            }
            if(b==d)
            {
                cnt++;
            }
            printf("%d\n",(cnt+1));
        }
    }
	return 0;
}