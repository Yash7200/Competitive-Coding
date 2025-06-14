#include <stdio.h>
int main()
{
    int t,x;
    char s[14];
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&x);
        scanf("%s",s);
        int chef=0,carlsen=0;
        for(int j=0;j<14;j++)
        {
            if(s[j]=='C')
            {
                carlsen+=2;
            }
            else if(s[j]=='N')
            {
                chef+=2;
            }
            else
            {
                chef++;
                carlsen++;
            }
        }
        if(chef<carlsen)
        {
            printf("%d\n",(60*x));
        }
        else if(chef>carlsen)
        {
            printf("%d\n",(40*x));
        }
        else if(chef==carlsen)
        {
            printf("%d\n",(55*x));
        }
    }
    return 0;
}
