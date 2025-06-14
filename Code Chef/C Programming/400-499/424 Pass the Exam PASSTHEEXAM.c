#include <stdio.h>
int main() 
{
    int t,i,a,b,c;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&a,&b,&c);
        if((a!=0)&&(b!=0)&&(c!=0))
        {
            if((a>=10)&&(b>=10)&&(c>=10))
            {
                if((a+b+c)>=100)
                {
                    printf("PASS\n");
                }
                else
                {
                    printf("FAIL\n");
                }
            }
            else
            {
                printf("FAIL\n");
            }
        }
        else
        {
            printf("FAIL\n");
        }
    }
	return 0;
}